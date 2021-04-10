# MVVM의 구현 연습을 위한 repo 입니다.

[데모 페이지](https://0307kwon.github.io/javascript-mvv-practice/)

![image](https://user-images.githubusercontent.com/48755175/114265528-3a29f980-9a2c-11eb-99c1-a8abaccbdb12.png)

## 😁 이 프로그램에 대해 알아두면 좋은 점

1. 현재 view 코드에 modelView의 name 값을 `얍얍`이라는 값으로 변경해두었음
  
    => modelView의 값을 변경했지만 view에도 자동으로 반영되어 화면에 띄워짐

2. 사용자 정보를 등록할 때마다 console.log로 전체 사용자 정보를 띄우도록 만듦

    => 사용자 정보가 잘 추가되고 그에 따라 화면이 갱신되는 모습을 볼 수 있음
    
    
## 😵 MVC vs MVVM

### 💕 MVC
<img width="500px" src="https://user-images.githubusercontent.com/48755175/114265236-aad01680-9a2a-11eb-98e0-9af42333eff8.png" />

### 💕 MVVM
<img width="500px" src="https://user-images.githubusercontent.com/48755175/114265249-bde2e680-9a2a-11eb-9771-b2d3401b125d.png" />

MVVM는 MVC에 비해 다음과 같은 장점이 있다.
1. 뷰모델이 특정 모델에 대해 단일한 책임을 질 수 있다. (책임 분산, 복잡도 하락)
2. 다양한 뷰모델의 조합으로 뷰를 구성할 수 있다. (뷰 모델의 다양한 조합이 가능해짐으로써 재사용성 증가)

## 참고 자료
[bsidesoft MV* 에 대해서](https://www.bsidesoft.com/5948)

[bsidesoft MVVM구현](https://www.bsidesoft.com/5964)
