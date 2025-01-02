#include <iostream>
  #include <vector>
  #include <string>
  using namespace std;

   ## CODE_HERE ##
  
  int main() {
      // Declare input variables
      vector<int> nums;
  
      // Read inputs
  cin >> nums;
  
      // Call the function
      int result = findMaxPairSum(nums);
  
      // Output the result
  cout << result << endl;
  
      return 0;
  }