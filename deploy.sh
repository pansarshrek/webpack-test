#!/bin/bash

# Deploy to s3 bucket with read access to everyone
aws s3 sync dist s3://pansarshrek-webapp/$version --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
