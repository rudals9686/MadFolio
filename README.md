# MadPolio
## Make your PERFECT portfolio
---
Week2 4분반 경민,창우팀

- 개발자와 디자이너를 위해 입력한 내용을 바탕으로 포트폴리오 사이트를 생성해 줍니다.
- 다른 사람이 올린 포트폴리오를 검색할 수 있습니다.
- 개발자/디자이너를 위한 채용 공고도 확인할 수 있습니다.

---

### a. 개발 팀원

- 이창우 - POSTECH 컴퓨터공학과 20학번
- 김경민 - 한양대학교 컴퓨터소프트웨어학부 19학번

---

### b. 개발환경

- Language: React.js, Node.js
- Database: MongoDB

```
- IDE: Visual Studio code

---

### c. Web applicaiton 소개

### 3.Search

***Major features***
- 사용자가 데이터베이스에 있는 모든 포트폴리오를 검색할 수 있습니다.
- 사용자이름, 직군과 일치하는지 확인하여 실시간으로 결과를 필터링할 수 있습니다.
- 검색 결과에서 포트폴리오 항목을 클릭하면 해당 포트폴리오에 대한 페이지로 이동합니다

---

***기술설명***
- 
- 사용자 데이터를 비동기로 가져오는 기능은 React의 useEffect와 axios 라이브러리를 이용해 구현되었습니다. 
- 특정 시간이 지난 후에 HTTP 요청이 발생하고, 요청이 완료되면 사용자 데이터가 앱의 상태로 설정됩니다.
- 포트폴리오를 클릭하면 navigate를 통해 portfolio의 id에 해당하는 값의 viewcv로 전환됩니다.

---
### 4.Hire

***Major features***
- 개발자와 디자이너 직무에 대한 채용공고를 제공합니다.
- 사용자는 원하는 직무의 버튼을 클릭하여 개발자와 디자이너의 공고를 전환 할 수 있습니다.
- 각 채용항목에는 채용제목, 회사이름, 요구되는 기술의 정보가 포함됩니다.
- 채용항목을 클릭하면 해당 채용공고의 웹페이지로 직접 이동하게 됩니다.

---

***기술설명***
- axios를 사용하여 서버에서 채용 정보를 가져옵니다. 요청은 비동기적으로 처리되며, 응답이 도착하면 상태가 업데이트되어 새로운 채용공고가 표시됩니다.
- 직무 버튼을 클릭하면 jobtype이 변경되어 해당 endpoint에 맞는 요청을 서버로 보내 채용항목을 업데이트합니다.
- 서버에서는 채용공고 사이트의 채용정보를 크롤링하여 클라이언트에게 보내줍니다.

---
