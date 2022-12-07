#include "main.h"
#include "stdio.h"

int binary_search(int* nums, int numsSize, int target){
    int min = 0, max = numsSize - 1, mid = 0, i = 0;

    while (1) {
        mid = ((max-min) / 2) + min; // set midpoint

        if (target < nums[mid]) 
            max = mid;

        else if (target > nums[mid]) 
            min = mid;

        else if (target == nums[mid]) return (mid);

        if (min == max - 1) {
	    if (nums[min] == target) return (min);
	    if (nums[max] == target) return (max);
	    return (-1);
	}
    }
}
