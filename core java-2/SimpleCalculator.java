import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        double firstNumber = scanner.nextDouble();

        System.out.print("Enter the second number: ");
        double secondNumber = scanner.nextDouble();

        System.out.println("Choose an operation from the following options:");
        System.out.println("  + : Addition");
        System.out.println("  - : Subtraction");
        System.out.println("  * : Multiplication");
        System.out.println("  / : Division");
        System.out.print("Your choice: ");
        char operation = scanner.next().charAt(0);

        double result;
        boolean validOperation = true;

        if (operation == '+') {
            result = firstNumber + secondNumber;
            System.out.println("Result: " + firstNumber + " + " + secondNumber + " = " + result);
        } else if (operation == '-') {
            result = firstNumber - secondNumber;
            System.out.println("Result: " + firstNumber + " - " + secondNumber + " = " + result);
        } else if (operation == '*') {
            result = firstNumber * secondNumber;
            System.out.println("Result: " + firstNumber + " * " + secondNumber + " = " + result);
        } else if (operation == '/') {
            if (secondNumber != 0) {
                result = firstNumber / secondNumber;
                System.out.println("Result: " + firstNumber + " / " + secondNumber + " = " + result);
            } else {
                System.out.println("Error: Division by zero is not allowed.");
                validOperation = false;
            }
        } else {
            System.out.println("Error: Invalid operation choice selected.");
            validOperation = false;
        }

        scanner.close();
    }
}