pipeline{
    agent any   
    stages{
        stage("Build"){
            steps{
                echo "========executing Build========"                
            }            
        }
        stage("Test"){
            steps{
                echo "========executing Test========"                
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
