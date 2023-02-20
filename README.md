# business-model
시작은 윤승기 네일샵 홈페이지 만들기

================= vuejs 사용법================
1. nodejs 설치 (v16.17.0)
2. vsCode 다운 (버젼 상관없음)
3. open folder 로 해서 D:\dev\git\business-model\business-model\beauty\frontend 여기 경로를 잡아주삼 
    - 원래 경로는 다른데였는데....git붙이니까 저기로 들어가버렸삼....암튼 프로젝트 폴더 내의 frontend 경로를 잡아주면 됨
4. terminal 에서 npm install 하면 node_modules 에 lib 파일이 내려옴 (현재 소스에 vue lib까지 다 올라간 상태라....안해도 상관은 없음
5. terminal 에서 npm run build 하면 beauty\src\main\resources\static\contents\js\model\vue 안에 js 파일 생성됨
6. 실행

================= vuejs 사용법================

주의 : 
1. 파일변경 체크 해주시고 : refresh using native hooks or poling 체크
2. 뷰와 이클립스를 별도의 서버로 따로 뛰어도 되고 나처럼 뷰에서는 작업하고 빌드하면 프로젝트 폴더로 js파일을 생성해주고 이클립스만 구동해도 되고
3. 버젼은 맞춰주시고
4. http://localhost:55555/swagger-ui/index.html : 승기가 좋아하는 스웨거 pom.xml에 아래 값만 넣어주면 끝
       <dependency>
         <groupId>org.springdoc</groupId>
         <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
         <version>2.0.2</version>
       </dependency>
