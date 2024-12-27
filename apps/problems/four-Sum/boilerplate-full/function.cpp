#include <iostream>
  #include <vector>
  #include <string>
  using namespace std;

   ## CODE_HERE ##
  
  int main() {
      // Declare input variables
      int num1;
    int num2;
  
      // Read inputs
  cin >> num1;

cin >> num2;
  
      // Call the function
      int result = sum(num1, num2);
  
      // Output the result
  cout << "Result: " << result << endl;
  
      return 0;
  }