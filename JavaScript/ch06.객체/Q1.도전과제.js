// 1. 만 나이를 계산하세요.
// 생년, 월, 일을 변수로 설정해서 풀기

let today = new Date();
let year = today.getYear()+1900;
let month = today.getMonth() + 1;
let date = today.getDate();
let birtday = { birthyear: 1993, birthmonth: 10, birthday: 20 };

function getRealAge(myyear) {
    
    let myrealage = year - myyear.birthyear;
    if (month <= myyear.birthmonth) {
        if (date <= myyear.birthday) {
                myrealage--;
        }
    }
    return myrealage
}

console.log(birtday);
console.log(getRealAge(birtday));

// 2. 백준 31090 다음의 사례에 대해서 Good/Bye를 출력하세요.
// 다음의 사례에 대해서 Good/Bye를 출력하세요.
//      2023, 2024, ..., 2040
// isDivisible(year)를 만들어서 해결하세요.

for (let i = 2023; i <= 2040; i++){
console.log(i[0])
}







// 3. 어레이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
// [24, 67, 45, 97, 43]의 결과를 출력하세요.

/* // 3. 배열 원소의 제곱의 합
let sampleArray = [43, 17, 25, 36, 98, 73];
function sum0fSquare(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i] * arr[i];
    return sum;
}
console.log(sum0fSquare(sampleArray)) */