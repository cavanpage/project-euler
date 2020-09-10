import React from 'react';
import { Typography, Grid, Link, Container, CssBaseline, 
    Card, CardContent, Button } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Nav } from './Nav';

const largeNumInput = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
const largeGridInput = ['08','02','22','97','38','15','00','40','00','75','04','05','07','78','52','12','50','77','91','08',
'49','49','99','40','17','81','18','57','60','87','17','40','98','43','69','48','04','56','62','00',
'81','49','31','73','55','79','14','29','93','71','40','67','53','88','30','03','49','13','36','65',
'52','70','95','23','04','60','11','42','69','24','68','56','01','32','56','71','37','02','36','91',
'22','31','16','71','51','67','63','89','41','92','36','54','22','40','40','28','66','33','13','80',
'24','47','32','60','99','03','45','02','44','75','33','53','78','36','84','20','35','17','12','50',
'32','98','81','28','64','23','67','10','26','38','40','67','59','54','70','66','18','38','64','70',
'67','26','20','68','02','62','12','20','95','63','94','39','63','08','40','91','66','49','94','21',
'24','55','58','05','66','73','99','26','97','17','78','78','96','83','14','88','34','89','63','72',
'21','36','23','09','75','00','76','44','20','45','35','14','00','61','33','97','34','31','33','95',
'78','17','53','28','22','75','31','67','15','94','03','80','04','62','16','14','09','53','56','92',
'16','39','05','42','96','35','31','47','55','58','88','24','00','17','54','24','36','29','85','57',
'86','56','00','48','35','71','89','07','05','44','44','37','44','60','21','58','51','54','17','58',
'19','80','81','68','05','94','47','69','28','73','92','13','86','52','17','77','04','89','55','40',
'04','52','08','83','97','35','99','16','07','97','57','32','16','26','26','79','33','27','98','66',
'88','36','68','87','57','62','20','72','03','46','33','67','46','55','12','32','63','93','53','69',
'04','42','16','73','38','25','39','11','24','94','72','18','08','46','29','32','40','62','76','36',
'20','69','36','41','72','30','23','88','34','62','99','69','82','67','59','85','74','04','36','16',
'20','73','35','29','78','31','90','01','74','31','49','71','48','86','81','16','23','57','05','54',
'01','70','54','71','83','51','54','69','16','92','33','48','61','43','52','01','89','19','67','48'];
//re-usable methods
const isPrime = (num: number): boolean => {
    if(num === 1) return false;
    if(num === 2) return true;

    for(let i = 2; i <= num / 2; i++){
        if(num % i === 0) return false;
    }
    return true;
}


// https://projecteuler.net/archives
const getSumOfMultiples = (maxNum: number, multiples: number[]): number => {
    let sum: number = 0;

    for(let i =0; i < maxNum; i++){
        for(let j = 0; j < multiples.length; j++){
            if(maxNum % multiples[j] === 0){
                sum = sum + i;
                break;
            }
        }
    }

    return sum;
}

const getSumOfEvenValuedFibonacciSequence = (maxNum: number): number => {
    let sum: number = 0;
    
    const fibonacciSequence: number[] = [1, 2];
    let i = 1;
    let currentFibNum = 0;

    while(currentFibNum < maxNum){
        currentFibNum = fibonacciSequence[i-1] + fibonacciSequence[i];
        fibonacciSequence.push(currentFibNum);
        sum = sum + currentFibNum;
        i++;
    }

    return sum;
}

const getLargestPrimeFactor = (targetNumber: number): number => {
    //TODO 
    return 1;
}

const isPalindrome = (n: number): boolean => {
    const numString: string = n.toString();

    if(n === 906609)console.log('found corect')
    for(let i =0; i < numString.length /2; i++){
        if(numString[i] !== numString[numString.length-i-1]){
            return false;
        }
    }
    return true;
}

const getSmallestNumberByLength = (numLength: number): number => {
    let numArray = new Array(numLength).fill('0');
    numArray[0] = '1';
    return Number(numArray.join(''));
}

const getLargestNumberByLength = (numLength: number): number => {
    return Number(new Array(numLength).fill('9').join(''));
}

const getLargestPalindrome = (numLength: number): number => {   
    const largestMultiple: number = getLargestNumberByLength(numLength)
    const smallestMultiple: number = getSmallestNumberByLength(numLength);
    const largestResult = largestMultiple * largestMultiple;
    const smallestResult = smallestMultiple * smallestMultiple;

    for(let i = largestResult; i >= smallestResult; i--){
        if(isPalindrome(i)){    
            for(let j = largestMultiple; j >= smallestMultiple; j--){
                for(let k = j; k >= smallestMultiple; k--){
                    if(j * k === i) return i;
                }
            }
        }
    }

    return -1;
}

const getSmallestMultiple = (minNum:number, maxNum: number): number => {
    return 0;
}

const getSumSquareDifference = (count: number): number => {
    let sumOfSquares = 0;
    let sum = 0;

    for(let i = 1; i <= count; i++){
        const squareResult = Math.pow(i, 2);
        sumOfSquares += squareResult;
        sum += i;
    }

    return Math.pow(sum, 2) - sumOfSquares;
}

const primeByPosition = (position: number): number => {


    let index = 1;
    let num = 3;

    while(true){   
        if(isPrime(num)){
            if(index === position) return num;
            else index++;
        }
        num++;
    }
}

const largestProductInASeries = (input: string, numberOfAdjacentNums: number): number => {
    let greatestProduct = 0;

    for(let i =0; i < input.length - numberOfAdjacentNums - 1; i++){
        const adjacentNums: string[] = [];
        let product = 1;
        for(let j = 0; j < numberOfAdjacentNums; j++){
            const targetNum = input[i + j];
            adjacentNums.push(targetNum);
            product *= Number(targetNum)
        }
        if(product > greatestProduct) {
            greatestProduct = product;
        }
    }
    return greatestProduct;
}

const findPythagoreanTripletProduct = (targetValue: number): number => {
    //this is a brute force method, we can probably enhance this
    for(let i = 1; i < targetValue; i++){
        for(let j = i + 1; j < targetValue; j++){
            for(let k = j + 1; k < targetValue; k++){
                if(i + j + k === targetValue){
                    if(Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)){
                        return i * j * k;
                    }
                }
            }
        }
    }

    return 0;
}

const getSumOfPrimesBelowNumber = (targetNum: number): number => {
    const generatePrimes = (maxNum: number): number[] => {
        const isPrimeArray: boolean[] = new Array(maxNum).fill(true);
        const primes: number[] = [];
        
        for(let i = 2; i < Math.sqrt(maxNum); i++ ){
            if(isPrimeArray[i] === true){
                for(let j = i * i; j < maxNum; j += i){
                    isPrimeArray[j] = false;
                }
            }
        }
    
        for(let i =2; i < isPrimeArray.length; i++){
            if(isPrimeArray[i] === true){
                primes.push(i);
            }
        }
        
        return primes;
    }

    return generatePrimes(targetNum).reduce((p, c) => p + c);
}

const getLargestProductInAGrid = (input: string[], height: number, width: number): number => {
    let myGrid = [];
    let maxProduct = 0;

    const seeIfMaxProductAndSet = (value: number): void => {
        if(value > maxProduct){
            maxProduct = value;
        }
    }

    //map single dimmensional array to 2d matrix
    for(let i = 0; i < height; i++){
        const row = [];
        for(let j = 0; j < width; j++){
            row.push(input[i+j]);
        }
        myGrid.push(row);
    }

    //loop through each row
    for(let i = 0; i < height; i++){
        //loop through each element in the row
        for(let j = 0; j < width; j++){
            //to my left?
            const hasEnoughToLeft = j > 3;
            const hasEnoughtToRight = j < width - 4;
            const hasEnoughAbove = i > 3;
            const hasEnoughBelow = i < height - 4;

            if(hasEnoughToLeft){
                const product = Number(myGrid[i][j]) * Number(myGrid[i][j - 1]) * Number(myGrid[i][j - 2]) * Number(myGrid[i][j - 3]);
                seeIfMaxProductAndSet(product);
            }
            if(hasEnoughtToRight){
                const product = Number(myGrid[i][j]) * Number(myGrid[i][j + 1]) * Number(myGrid[i][j + 2]) * Number(myGrid[i][j + 3]);
                seeIfMaxProductAndSet(product);
            }
            if(hasEnoughAbove){
                const product = Number(myGrid[i][j]) * Number(myGrid[i - 1][j]) * Number(myGrid[i - 2][j]) * Number(myGrid[i - 3][j]);
                seeIfMaxProductAndSet(product);
            }
            if(hasEnoughBelow){
                const product = Number(myGrid[i][j]) * Number(myGrid[i + 1][j]) * Number(myGrid[i + 2][j]) * Number(myGrid[i + 3][j]);
                seeIfMaxProductAndSet(product);
            }
            if(hasEnoughAbove && hasEnoughToLeft){
                const product = Number(myGrid[i][j]) * Number(myGrid[i - 1][j - 1]) * Number(myGrid[i - 2][j - 2]) * Number(myGrid[i - 3][j - 3]);
                seeIfMaxProductAndSet(product);
            }
            if(hasEnoughAbove && hasEnoughtToRight){
                const product = Number(myGrid[i][j]) * Number(myGrid[i - 1][j + 1]) * Number(myGrid[i - 2][j + 2]) * Number(myGrid[i - 3][j + 3]);
                seeIfMaxProductAndSet(product);
            }
            if(hasEnoughBelow && hasEnoughToLeft){
                const product = Number(myGrid[i][j]) * Number(myGrid[i + 1][j - 1]) * Number(myGrid[i + 2][j - 2]) * Number(myGrid[i + 3][j - 3]);
                seeIfMaxProductAndSet(product);
            }
            if(hasEnoughBelow && hasEnoughtToRight){
                const product = Number(myGrid[i][j]) * Number(myGrid[i + 1][j + 1]) * Number(myGrid[i + 2][j + 2]) * Number(myGrid[i + 3][j + 3]);
                seeIfMaxProductAndSet(product);
            }
        }
    }

    return maxProduct;
}

const getPowerDigitSum = (base:number, pow: number): number =>{
    let result = BigInt(Math.pow(base, pow));
    let sum = 0;

    let resultString = result.toString();
    
    for(let i =0; i < resultString.length; i++){
        console.log(parseInt(resultString[i]));
        sum += Number(resultString[i]);
    }

    return sum;
}

let codeHeader: string = `
    /**
      "Project Euler exists to encourage, challenge, and develop the skills and enjoyment 
       of anyone with an interest in the fascinating world of mathematics.""
    */
    const life = () => { wakeUp(); eat(); learn(); sleep(); }
`;

const Title = () => {
    return(
        <>
        <SyntaxHighlighter language="javascript" style={rainbow}>
            {codeHeader}
        </SyntaxHighlighter> 
        </>
    )
}

export function ProjectEuler() {
  return (
    <>
        <CssBaseline>
            <Nav page="CODE" siteTitle="CAVANPAGE.COM"/>
            <Container component="main" maxWidth="xl">
                {Title()}
                <Grid container direction="row" justify="flex-start" alignItems='stretch' spacing={2}> 
                    <Problem answer={getSumOfMultiples(1000, [3, 5])} number={1} code={getSumOfMultiples}>
                        If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. <br/>
                        The sum of these multiples is 23.<br/>
                        Find the sum of all the multiples of 3 or 5 below 1000.
                    </Problem>
                    <Problem answer={getSumOfEvenValuedFibonacciSequence(4000000)} number={2} code={getSumOfEvenValuedFibonacciSequence}>
                        Each new term in the Fibonacci sequence is generated by adding the previous two terms. <br/>
                        By starting with 1 and 2, the first 10 terms will be:<br/>
                        1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...<br/>
                        By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
                    </Problem>
                    <Problem answer={getLargestPrimeFactor(600851475143)} number={3} code={getLargestPrimeFactor}>
                        The prime factors of 13195 are 5, 7, 13 and 29.<br/>
                        What is the largest prime factor of the number 600851475143 ?
                    </Problem>
                    <Problem answer={getLargestPalindrome(3)} number={4} code={getLargestPalindrome}>
                        A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.<br/>
                        Find the largest palindrome made from the product of two 3-digit numbers.
                    </Problem>
                    <Problem answer={getSmallestMultiple(1, 20)} number={5} code={getSmallestMultiple}>
                        2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.<br/>
                        What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
                    </Problem>
                    <Problem answer={getSumSquareDifference(100)} number={6} code={getSumSquareDifference}>
                        The sum of the squares of the first ten natural numbers is 385. The square of the sum of the first ten natural numbers is 3025.
                        Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640.
                        Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
                    </Problem>
                    <Problem answer={primeByPosition(10001)} number={7} code={primeByPosition}>
                        By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
                        What is the 10 001st prime number?
                    </Problem>
                    <Problem answer={largestProductInASeries(largeNumInput, 13)} number={8} code={largestProductInASeries}>
                        The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
                        {largeNumInput}
                        Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
                    </Problem>
                    <Problem answer={findPythagoreanTripletProduct(1000)} number={9} code={findPythagoreanTripletProduct}>
                        {`A Pythagorean triplet is a set of three natural numbers, a < b < c, for which a^2 + b^2 = c^2.`}
                        There exists exactly one Pythagorean triplet for which a + b + c = 1000.Find the product abc.
                    </Problem>
                    <Problem answer={getSumOfPrimesBelowNumber(2000000)} number={10} code={getSumOfPrimesBelowNumber}>
                        The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
                        Find the sum of all the primes below two million.
                    </Problem>
                    <Problem answer={getLargestProductInAGrid(largeGridInput, 20, 20)} number={11} code={getLargestProductInAGrid}>
                        In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
                            08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
                            49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
                            81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
                            52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
                            22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
                            24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
                            32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
                            67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
                            24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
                            21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
                            78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
                            16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
                            86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
                            19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
                            04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
                            88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
                            04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
                            20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
                            20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
                            01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
                        The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
                        What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
                    </Problem>
                    <Problem answer={getPowerDigitSum(2, 1000)} number={16} code={getPowerDigitSum}>
                        2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
                        What is the sum of the digits of the number 2^1000? 
                    </Problem>
                </Grid> 
            </Container>
        </CssBaseline>
    </>
  );
}



const Problem : React.FC<{answer: any, number: number; code: (...any:any[]) => any}> = (props):  React.ReactElement => {
    const getProblemUrl = (problemNumber: number): string => {
        return `https://projecteuler.net/problem=${problemNumber}`;
    }

    const [isCodeVisible, setIsCodeVisible] = React.useState<boolean>(false);
    const [isResultVisible, setIsResultVisible] = React.useState<boolean>(false);
    const url = getProblemUrl(props.number);

    const getCode = () => {
        return (
            <>
                <CardContent>
                    <SyntaxHighlighter language="javascript" style={rainbow}>
                        {props.code.toString()}
                    </SyntaxHighlighter> 
                </CardContent> 
                <Button color="primary" onClick={() => setIsCodeVisible(false)} style={{position: 'absolute', bottom: 0}}>Hide Code</Button>
            </>
        )
    }

    const getInfo = () => {
        return (
            <>
                <CardContent >
                    <Typography variant="h6"><Link href={url}>Problem #{props.number}</Link></Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                        {props.children}
                    </Typography>  
                </CardContent>    
                <Button color="primary" onClick={() => setIsCodeVisible(true)} style={{position: 'absolute', bottom: 0}}>View Code</Button>
                <Button color="secondary" onClick={() => setIsResultVisible(true)} style={{position: 'absolute', bottom: 0, right:0}}>Show Result</Button>   
            </>
        )
    }

    const getResult = () => {
        return (
            <CardContent>
                <Typography>{props.answer}</Typography>
                <Button color="secondary" onClick={() => setIsResultVisible(false)} style={{position: 'absolute', bottom: 0, right:0}}>Hide Result</Button> 
            </CardContent>
        )
    }


    return (
        <Grid item xs={12} sm={6} md={4} lg={3} container>        
                <Card className="problem" style={{width: '100%',height: '100%', position: 'relative', marginBottom:'2em'}}>
                    {
                        isCodeVisible ? getCode() : isResultVisible ? getResult() : getInfo()
                    }
                </Card>
        </Grid>
    )
}
