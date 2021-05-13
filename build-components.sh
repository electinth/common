rm -rf components/* 

GLOB="src/components/**/*.wc.svelte"
COMPONENTS=`node src/utils/glob.mjs "$GLOB"`

for COMPONENT in $COMPONENTS
do
  echo Building $COMPONENT
  node src/utils/esbuild.mjs $COMPONENT
done
