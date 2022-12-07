#include "main.h"
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
  int nums[] = {1,3,5,7,9,11};
  printf("return= %d\n",binary_search(nums, sizeof(nums) / sizeof(int), atoi(argv[1])));
  return 0;
}
