pipeline {
  agent any

  parameters {
    
    choice(
      name: 'TEST_SUITE',
      choices: ['smoke', 'regression', 'web' , 'all'],
      description: 'Select which test suite to run'
    )

    string(
      name: 'EMAIL_RECIPIENT',
      defaultValue: 'marwahelmy151@gmail.com',
      description: 'Email address for notifications'
    )
  }

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        bat 'npx playwright install'
      }
    }

    stage('Clean Old Results') {
      steps {
        bat 'rmdir /s /q test-results 2>nul || exit /b 0'
        bat 'rmdir /s /q allure-results 2>nul || exit /b 0'
        bat 'rmdir /s /q playwright-report 2>nul || exit /b 0'
      }
    }

    stage('Prepare Allure Folder') {
      steps {
        bat 'mkdir allure-results'
      }
    }
    
    stage('Run Playwright Tests') {
      steps {
        script {
          echo "Running test suite: ${params.TEST_SUITE}"

          if (params.TEST_SUITE == 'smoke') {
            bat 'npx playwright test --grep @smoke'
          }
          else if (params.TEST_SUITE == 'regression') {
            bat 'npx playwright test --grep @regression'
          }
          else if (params.TEST_SUITE == 'web')
            bat 'npx playwright test --grep @web'
          else {
            bat 'npx playwright test'
          }
        }
      }
    }


    stage('Archive Reports') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**, allure-results/**, test-results/**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {

      // ✅ Publish Allure report (THIS FIXES YOUR ISSUE)
      allure([
        includeProperties: false,
        commandline: 'allure',
        results: [[path: 'allure-results']]
      ])

      script {

        // ✅ Parse JUnit results
        def result = junit(
          testResults: 'test-results/results.xml',
          allowEmptyResults: true
        )

        def total   = result.totalCount
        def failed  = result.failCount
        def skipped = result.skipCount
        def passed  = total - failed - skipped

        // ✅ Email notification
        emailext(
          to: params.EMAIL_RECIPIENT,
          subject: "Jenkins | ${env.JOB_NAME} #${env.BUILD_NUMBER} | ${currentBuild.currentResult}",
          mimeType: 'text/plain',
          body: """Build Finished

Result: ${currentBuild.currentResult}

Test Summary:
Total Test Cases: ${total}
Passed: ${passed}
Failed: ${failed}
Skipped: ${skipped}

Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}

Build URL:
${env.BUILD_URL}

Allure Report:
${env.JENKINS_URL}job/${env.JOB_NAME}/${env.BUILD_NUMBER}/allure/

Playwright HTML Report:
${env.BUILD_URL}artifact/playwright-report/index.html
"""
        )
      }
    }
  }
}
