pipeline {
    agent any

    environment {
        AWS_S3_BUCKET_NAME = 'nwosumajor-professional-portfolio-2026' // Replace with your S3 bucket name
    }

    stages {
        stagestage('Install Node Dependencies') {
            steps {
                echo 'Cleaning up old or corrupted dependencies...'
                sh 'rm -rf node_modules package-lock.json'
                
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Next.js App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to AWS S3') {
            steps {
                // Uses Secret Text bindings as required by the guidelines
                withCredentials([
                    string(credentialsId: 'aws-access-key', variable: 'AWS_ACCESS_KEY_ID'),
                    string(credentialsId: 'aws-secret-key', variable: 'AWS_SECRET_ACCESS_KEY')
                ]) {
                    sh '''
                        # Uses the boto3 environment installed on the EC2 Jenkins user
                        ~/venv/bin/python3 deploy.py
                    '''
                }
            }
        }
    }
}