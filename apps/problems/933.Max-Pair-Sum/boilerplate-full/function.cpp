#include <iostream>
  #include <vector>
  #include <string>
  using namespace std;

   ## CODE_HERE ##
  
  int main() {
      // Declare input variables
      vector<int> nums;

      int size ;

      cin >> size;
  
      // Read inputs
      for(int i=0;i<size;i++) cin >> nums[i];

      // Call the function
      int result = findMaxPairSum(nums);
  
      // Output the result
  cout << result << endl;
  
      return 0;
  }