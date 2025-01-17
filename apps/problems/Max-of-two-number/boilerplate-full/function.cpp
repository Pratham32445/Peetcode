#include <iostream>
#include <vector>
#include <string>
#include <algorithm>  // For algorithms like sort(), etc.
#include <cmath>      // For mathematical functions like sqrt(), pow(), etc.
#include <limits>     // For numeric limits like INT_MAX, etc.
using namespace std;

   ## CODE_HERE ##
  
  int main() {
      // Declare input variables
      vector<int> nums;
  
      // Read inputs
  int size_nums;
      cin >> size_nums;
      vector<int> nums(size_nums);
      for (int i = 0; i < size_nums; ++i) {
          cin >> nums[i];
      }
  
      // Call the function
  int result = findMaxPairSum(nums);
  
      // Output the result
  cout << result << endl;
  
      return 0;
  }