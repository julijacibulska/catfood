## How would you process Cat1 uploaded data items?
Save both images. Use optical character recognition to process fecaltest_results to save data and compare with new uploaded test results.

## How can we automate the processing operations with such data items to reduce manual input of values?
Maybe for x-ray, a neural network could be trained to see if an animal might have any complications. For test results, optical character recognition can be used to save the date into structures and compare between tests.

## What are the proposed security mechanisms to sustain data privacy and mitigate data leakage?

Images can be saved on such service as Amazon S3 with private status and bucket encryption can be used for additional security. The other sensitive data can be encrypted and just users with the key can decrypt it.

## What would you use for such data visualization, taking into account that data will be continuously collected and a user needs to be notified on the abnormalities of collected values?

For data visualization, graphics/diagrams could be used to show the change of test results - when some metrics are out of normal state. Once any of metric becomes higher or lower than normal or continuously rises/falls, notification should be sent.

## Where will the data will be stored? What are your thoughts on data population mechanisms when prompted by the user?

Images can be stored on Amazon S3, that is secure file storage. Text data can be populated using optical character recognition from the test result screenshot image (e.g. cat1_fecaltest_result.png).
