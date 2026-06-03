public class OperatorPrecedence {
    public static void main(String[] args) {
        
        int resultWithoutParentheses = 10 + 5 * 2;
        int resultWithParentheses = (10 + 5) * 2;

        
        System.out.println("Result of (10 + 5 * 2) = " + resultWithoutParentheses);
        System.out.println("Result of ((10 + 5) * 2) = " + resultWithParentheses);

        
        System.out.println("\nExplanation of the Order of Operations:");
        System.out.println("1. In '10 + 5 * 2', Multiplication (*) has higher precedence than Addition (+).");
        System.out.println("   Therefore, 5 * 2 is evaluated first (10), then added to 10, resulting in 20.");
        System.out.println("2. In '(10 + 5) * 2', Parentheses () possess the highest precedence level.");
        System.out.println("   Therefore, 10 + 5 is forced to evaluate first (15), then multiplied by 2, resulting in 30.");
    }
}