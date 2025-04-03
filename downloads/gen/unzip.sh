cd "/Users/vleramehani/Desktop/ims-2025-vlera/p5mirror-vlera/downloads/../p5projects"
#
echo unzip 1 "ims02-vlera-06E5eatL"
rm -rf "./ims02-vlera-06E5eatL"
mkdir "./ims02-vlera-06E5eatL"
pushd "./ims02-vlera-06E5eatL" > /dev/null
unzip -q "../../downloads/zips/ims02-vlera-06E5eatL"
popd > /dev/null
#
echo unzip 2 "ims01-vlera-GVQYuR8T4"
rm -rf "./ims01-vlera-GVQYuR8T4"
mkdir "./ims01-vlera-GVQYuR8T4"
pushd "./ims01-vlera-GVQYuR8T4" > /dev/null
unzip -q "../../downloads/zips/ims01-vlera-GVQYuR8T4"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi