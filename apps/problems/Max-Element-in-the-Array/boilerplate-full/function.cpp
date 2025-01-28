#include <iostream>
#include <vector>
#include <string>
#include <algorithm>  
#include <cmath>     
#include <climits>
#include <limits>    
using namespace std;

   ## CODE_HERE ##
  
  int main() {
      // Declare input variables  
      // Read inputs
  int size_nums;
      cin >> size_nums;
      vector<int> nums(size_nums);
      for (int i = 0; i < size_nums; ++i) {
          cin >> nums[i];
      }
  
      // Call the function
  int result = findMaxElement(nums);
  
      // Output the result
  cout << result << endl;
  
      return 0;
  }