import java.util.Scanner;

public class ranfom {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String city[] = new String[4];
        int stdcode[] = new int[4];
        for (int i = 0; i < city.length; i++) {
            System.out.print("Enter city " + (i + 1) + " : ");
            city[i] = sc.next();
            System.out.print("Enter STD-code of city " + (i + 1) + " : ");
            stdcode[i] = sc.nextInt();
        }
        for (int i = 0; i < city.length; i++) {
            System.out.print(city[i] + " ");
            // System.out.println();

        }
        System.out.println(" ");
        for (int i = 0; i < stdcode.length; i++) {
            System.out.print(stdcode[i] + " ");
        }
        System.out.println(" ");

        System.out.print("Enter the std: ");
        int stdcodess = sc.nextInt();
        int index = -1;
        for (int i = 0; i < stdcode.length; i++) {
            if (stdcodess == stdcode[i]) {
                index = i;
            }
        }
        if (index >= 0) {
            System.out.println("CITY_NAME: " + city[index]);
            System.out.println("STD_CODE: " + stdcode[index]);
            System.out.println("Search seccessfull!");
        } else {
            System.out.println("Search unsuccessful!");
        }

    }
}
