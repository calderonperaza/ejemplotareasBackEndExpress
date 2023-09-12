pipeline{
    agent any
    tools {nodejs "node12"}
    stages{
        stage("Build"){
            steps{
                echo "========executing Build========"
                sh "npm install"
            }            
        }
        stage("Test"){
            steps{
                echo "========executing Test========"
                sh "npm test"
            }            
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}