#!/bin/bash
git submodule init
git submodule update
docker build -t pg_coding_challenge_module_example .
docker run -p 3000:3000 pg_coding_challenge_module_example
