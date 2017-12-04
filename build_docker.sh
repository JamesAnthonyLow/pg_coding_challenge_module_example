#!/bin/bash
git submodule init
git submodule update
docker build -t pg_coding_challenge_module_example .
