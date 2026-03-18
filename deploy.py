import os
import sys
import boto3
import mimetypes
from botocore.exceptions import NoCredentialsError, ClientError

# Configuration
# Next.js static exports default to the 'out' directory
BUILD_DIR = 'out' 
# Jenkins should inject the bucket name as an environment variable
BUCKET_NAME = os.getenv('AWS_S3_BUCKET_NAME') 

def deploy_to_s3():
    if not BUCKET_NAME:
        print("ERROR: AWS_S3_BUCKET_NAME environment variable is not set.")
        sys.exit(1)

    if not os.path.isdir(BUILD_DIR):
        print(f"ERROR: Build directory '{BUILD_DIR}' not found. Did you run 'npm run build'?")
        sys.exit(1)

    print(f"Starting deployment of '{BUILD_DIR}' to S3 bucket: {BUCKET_NAME}...")
    
    # Initialize the S3 client
    # Boto3 will automatically look for AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in the environment
    s3_client = boto3.client('s3')

    try:
        # Walk through the Next.js build directory
        for root, dirs, files in os.walk(BUILD_DIR):
            for filename in files:
                local_path = os.path.join(root, filename)
                
                # Create the relative path for the S3 object key (e.g., '_next/static/css/style.css')
                s3_key = os.path.relpath(local_path, BUILD_DIR)
                
                # Ensure paths use forward slashes for S3, even if running on Windows
                s3_key = s3_key.replace('\\', '/')

                # Guess the file's content type (MIME type)
                content_type, _ = mimetypes.guess_type(local_path)
                if content_type is None:
                    content_type = 'binary/octet-stream'

                # Upload the file
                print(f"Uploading {s3_key} (Type: {content_type})...")
                s3_client.upload_file(
                    local_path, 
                    BUCKET_NAME, 
                    s3_key,
                    ExtraArgs={
                        'ContentType': content_type,
                        'ACL': 'public-read' # This is required by the instructions
                    }
                )
                
        print("\nDeployment completed successfully!")

    except NoCredentialsError:
        print("ERROR: AWS credentials not found. Ensure Jenkins has AWS credentials configured.")
        sys.exit(1)
    except ClientError as e:
        print(f"AWS Error: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    deploy_to_s3()