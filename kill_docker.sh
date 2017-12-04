#!/bin/bash
docker kill `docker ps | grep pg_coding_challenge_module_example | awk '{print $1}'`
