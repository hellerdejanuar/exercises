#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
/**
 * swap_elements: swaps two elements of an array
 **/
void swap_elements(int *array, size_t x, size_t y) {
	size_t aux = array[x];

	array[x] = array[y];
	array[y] = aux; 
} 

/**
 * selection_sort: Function for applying selection sort algo
 * @array: array to sort
 * @size: size of the array
 **/
void selection_sort(int *array, size_t size) {
	size_t i, j;
	for (i = 0; i < size; i ++) { 		// traverse list
		for (j = i; j < size; j++) { 		// find next
			if (array[i] <= array[j])
				continue;
			swap_elements(array, i, j);
		}
	}
	return;
}
