#!/bin/bash
# Name: clean-dev-build.sh
# Purpose: build only files to delivery build assets

SOURCE_DIR="src"
DEV_DIR="build-dev";
BUILD_DIR="build";
TOP_FOLDER="ComicReader";
PACKAGE_BASE="warnermediacode-wme-dc-comicreader";

rm -rf ${BUILD_DIR}; mkdir ${BUILD_DIR}; 
mkdir ${BUILD_DIR}/${TOP_FOLDER};
mkdir ${BUILD_DIR}/${TOP_FOLDER}/app; mkdir ${BUILD_DIR}/${TOP_FOLDER}/public;

# # ## Copy All Files
cp -r ${DEV_DIR}/${TOP_FOLDER}/app/components/* ${BUILD_DIR}/${TOP_FOLDER}/app/;
cp ${DEV_DIR}/${TOP_FOLDER}/public/ComicReaderApp.css ${BUILD_DIR}/${TOP_FOLDER}/public/;
cp -r public/comic-reader ${BUILD_DIR}/${TOP_FOLDER}/public/;

# # ## Clean up unneeded files
rm -rf ${BUILD_DIR}/${TOP_FOLDER}/app/ComicReader.*;

## Generate and move package to release area
npm pack;
mv package-release/*.tgz package-release/versions/;
mv "${PACKAGE_BASE}"* package-release;

printf "\nFinal BUILD:: /${BUILD_DIR}/${TOP_FOLDER} \n\n"; ls -lrt ${BUILD_DIR}/${TOP_FOLDER}/*; 
printf "\n//comic-reader: \n"; ls -lrt ${BUILD_DIR}/${TOP_FOLDER}/public/comic-reader; printf "\n";
printf "\n Package Directory: \m"; ls -lrt package-release; printf "\n";