pipeline {
    agent any
    tools {nodejs "node12"}
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node -v'
                sh 'whoami'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}