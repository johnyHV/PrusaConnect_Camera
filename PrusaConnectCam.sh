#!/bin/bash

while :
do
	raspistill  -w 1012 -h 760 --quality 50 -o second_image.jpg
	base64 -w 0 second_image.jpg  > image.txt
	node send_data.js
	sleep 10
done

