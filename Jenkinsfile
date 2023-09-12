pipeline {
    agent any
    tools {nodejs "node12"}
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node -v'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}