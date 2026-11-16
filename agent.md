# OSS Playground Hunter — agent.md

## 과제 업무 맥락
- 강의 목표: 다음 학기 오픈소스SW 개론에 추천할 브라우저 기반 인터랙티브 OSS 프로젝트 3개를 조사하고 1개를 수정하여 증명한다.
- 과제 원문: https://app.notion.com/p/Assignment-OSS-Playground-Hunter-415e0aa2413780b0bc9fe1229a8731de
- 기본 평가: 조사·실행·코드 수정·수업 활용 추천서 각 5점, 총 20점.
- 이 저장소는 https://github.com/doublespeakgames/adarkroom 의 Fork이며, MPL-2.0 라이선스·원본 저작권 고지를 유지한다.

## 페르소나의 검토 기준
1. 과제 수행 학생: 30~60분 안에 소스 위치·조작·코드 수정·Commit을 재현할 수 있어야 함.
2. 평가자: 주장마다 원본 파일·실행 캡처·Commit 등 확인 가능한 근거가 있어야 함.
3. 다음 학기 실습생: 설치 부담과 진입장벽이 낮고 사용자 행동이 결과에 영향을 주어야 함.
4. 원본 OSS 유지보수자: 원본 출처·라이선스·저작권 표시를 유지하고 변경 사항을 분리해야 함.
5. QA 검토자: 직접 실행, 원본 소스 확인, 자동 정적 검사, 추정을 절대 혼동하지 않아야 함.

## 확인된 범위와 제출 필수 조건
- 후보 3개 조사: A Dark Room(최종 선정), 2048, Hextris. 네 가지 제외 대상(WebGL Fluid Simulation, T-Rex Runner, Tone.js, TensorFlow.js)은 조사 대상에서 제외.
- 최종 선정작 실제 실행 및 서로 다른 기능/설정 2개 이상 체험, 실제 실행 화면 캡처 최소 2장.
- 본인 GitHub Fork, 주요 기능 소스 1개 이상 탐색, 실제 코드 수정, Git Commit, 전후 비교.
- OSS Playground 추천서: 기본정보/흥미/코드 변경 파일·변수·기대효과/30~60분 수업 활용/3~5문장 최종 의견.
- PDF 4~6페이지 내외 + 본인 Fork URL LMS 제출. 배포 실행 URL은 선택.

## 사실·추정·검증 단계
- SOURCE_VERIFIED: GitHub 원문과 diff를 확인했다. 실제 브라우저 실행 성공이라고 쓰면 안 됨.
- STATIC_CHECKED: 문법/정적 코드 구조 확인. 실제 사용자 조작을 검증한 것이 아님.
- USER_TESTED: 학생 본인이 직접 2개 테스트를 실행하고 캡처·동작을 기록.
- SUBMITTED: LMS의 제출 완료 확인이 있어야 부여.
- 발견·확인되지 않은 링크/캡처/Commit/SHA를 창작하지 않는다.
- AI는 탐색·코드 이해·수정 보조에 활용 가능하지만 **실제 실행과 검증은 본인이 수행**해야 한다.

## 현재 수정 변경
- 파일: script/room.js
- 원본: _STOKE_COOLDOWN = 10 (초)
- 변경: _STOKE_COOLDOWN = 5 (초)
- 사용처: lightButton, stokeButton의 cooldown 속성
- 정적 확인: Button.js는 cooldown 시간에 1000을 곱해 애니메이션 시간(ms)으로 처리한다.
- Commit: https://github.com/Dowon-Kang/adarkroom/commit/c97429777b8cdd3ab90a50091225380e29842cbc
- 이 결과를 실제 게임에서 테스트했다고 주장하지 말 것. 새 게임/기록 초기화 후 버튼 활성화 간격을 직접 확인해야 함.

## 작업 종료 게이트
- PDF 실제 캡처 2장·각 테스트 입력과 결과·소스 diff·Commit·추천서 항목을 모두 채우기 전에는 '제출 완료'라고 표시하지 않는다.
- GitHub Pages 선택 배포 시 수정본 URL을 브라우저에서 열고 정적 자산/변경 효과/라이선스 조건 확인.
- plan.md의 상태를 갱신할 때 완료/차단/미확인을 엄격히 구분한다.
