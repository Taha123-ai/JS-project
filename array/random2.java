import java.util.Scanner;

public  class random2{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        
        
        System.out.println("enter array size");
        int size=sc.nextInt();
        int arr[]=new int[size];

        for(int i=0;i<arr.length;i++){
           System.out.print("enter index "+i+": ");
        
            arr[i]=sc.nextInt();
        }
        System.out.print("inputed array is :  ");
    
        for(int i:arr){
          
            System.out.print(i);
        }
    }
}
