# OSS Playground Hunter — 탐색 보고서 원고 (A Dark Room)

> **DRAFT / 제출 금지:** 실제 브라우저 테스트와 캡처 2장 이상이 아직 반영되지 않음. 과제 최종 제출 시 4~6페이지 내외의 PDF로 편집할 것.  
> 원문: https://app.notion.com/p/Assignment-OSS-Playground-Hunter-415e0aa2413780b0bc9fe1229a8731de

## 1. OSS 프로젝트 3개 조사

| 후보 | GitHub | 라이선스 | 핵심 특징 | 실행/데모 |
|---|---|---|---|---|
| A Dark Room | https://github.com/doublespeakgames/adarkroom | MPL-2.0 | 텍스트 중심의 생존·탐험 인터랙티브 게임. 버튼과 자원에 따라 진행 상태 변화 | https://doublespeakgames.github.io/adarkroom/ |
| 2048 | https://github.com/gabrielecirulli/2048 | MIT | 방향키로 타일을 합치는 숫자 퍼즐. JavaScript 게임 규칙 수정 가능 | https://play2048.co/ (공식 데모 여부는 제출 전 직접 확인) |
| Hextris | https://github.com/Hextris/hextris | GPL-3.0-or-later | 육각형 블록 회전 퍼즐. 입력·블록 생성·색상/속도 조정 가능 | https://hextris.github.io/hextris/ |

- 원문 제외 프로젝트인 WebGL Fluid Simulation, T-Rex Runner, Tone.js, TensorFlow.js를 조사 대상으로 사용하지 않는다.
- 세 프로젝트 모두 소스가 공개되어 있고 라이선스 안내를 갖추고 있다. 위 데모들의 실사용 성공은 **학생 직접 확인 전까지 미검증**이다.
- 선택 기준: 오픈소스 라이선스, 직접 조작, 실행 가능성, 몇 줄의 코드 변경으로 실제 화면에 나타나는 동작 수정, 30~60분 수업 활용.

## 2. 최종 선정: A Dark Room

- **선정 저장소:** https://github.com/doublespeakgames/adarkroom
- **수정본 Fork:** https://github.com/Dowon-Kang/adarkroom
- **선정 이유:** 브라우저 텍스트 게임으로 입력과 피드백이 명확하고, `script/room.js`의 쿨다운 값을 수정하면 UI 버튼의 동작을 비교할 수 있다. 한국어 등을 포함한 다국어 기능을 통해 별개의 테스트도 구성할 수 있다.
- **한계:** 게임의 초반 진행 상태, 자원, 저장 기록, 디버그 모드에 따라 버튼 동작이 달라질 수 있다. 원본과 수정본을 동일한 조건에서 비교해야 한다.
- **라이선스:** MPL-2.0. 원저작권/라이선스 안내를 유지하며 수정 파일의 라이선스 의무를 준수한다.

## 3. 직접 실행·체험 결과 — 증빙 대기

이 절은 실제 실행한 뒤 직접 기록해야 하므로 결과를 미리 쓰지 않는다.

| 테스트 | 사용자 행동 | 예상 반응 (사전 가설) | 실제 관찰 | 화면 증빙 |
|---|---|---|---|---|
| A | 새 게임에서 `light fire` 버튼 누르기 | 상태/문구, 버튼 진행 상태가 바뀜 | **미실행** | [실제 캡처 1 삽입] |
| B | `?lang=en` / `?lang=ko`로 언어 변경 | 표시 언어가 달라짐 | **미실행** | [실제 캡처 2 삽입] |

**실행 환경 기록:** 브라우저/버전 = [미기재], OS = [미기재], 실행 URL = [미기재], 테스트 날짜 = [미기재].  
**가장 재미있었던 기능:** [직접 체험 후 기록].  
**행동과 결과의 관계:** [실제 관찰 뒤 기록].  
**다른 학생에게 추천할 이유:** [직접 체험 근거와 함께 기록].

## 4. 코드 구조 분석 및 수정 전후 비교

| 파일 | 역할 |
|---|---|
| `script/room.js` | 방 관련 게임 동작과 불 지피기 버튼의 쿨다운 설정 |
| `script/Button.js` | 버튼 쿨다운 표시 및 시간 계산 |
| `index.html` | 필요한 JavaScript와 CSS를 불러오는 시작 페이지 |

실제 Fork에서 변경된 핵심 한 줄:

```diff
- _STOKE_COOLDOWN: 10, // cooldown to stoke the fire
+ _STOKE_COOLDOWN: 5, // cooldown to stoke the fire (OSS Playground exercise)
```

- 원본 기본 설정: **10초**
- Fork의 수정 설정: **5초**
- 영향 범위(소스 경로 확인): `lightButton`, `stokeButton`이 `Room._STOKE_COOLDOWN` 사용; `Button.js`는 표시 시간 계산에 `time * 1000` 적용.
- 실제 변경 Commit: https://github.com/Dowon-Kang/adarkroom/commit/c97429777b8cdd3ab90a50091225380e29842cbc
- 정적 검사 스크립트: `node tools/oss-playground-check.mjs`; 이는 플레이테스트를 대신하지 않는다.
- **실제 UI 전후 실측:** [미수행 — 원본/수정본 동일 상태에서 직접 테스트 후 작성]
- **테스트 유의:** Debug 모드에서 쿨다운이 0으로 덮어써지거나 시간배속 옵션이 켜지면 실측이 왜곡될 수 있다.

자세한 실행 방법과 기록 양식: [OSS_PLAYGROUND_VERIFICATION.md](./OSS_PLAYGROUND_VERIFICATION.md)

## 5. OSS Playground 추천서 ①~③

### ① 프로젝트 기본 정보

- **프로젝트명:** A Dark Room
- **원본 GitHub URL:** https://github.com/doublespeakgames/adarkroom
- **공식 실행 URL:** https://doublespeakgames.github.io/adarkroom/
- **본인 Fork GitHub URL:** https://github.com/Dowon-Kang/adarkroom
- **오픈소스 라이선스:** MPL-2.0
- **주요 기능 및 특징:** 텍스트 기반 진행, 버튼을 통한 게임 상태 변화, 다국어 지원, 자원과 진행 상태 관리.

### ② 재미 요소

- **무엇이 흥미로운가?** 제한된 텍스트와 버튼으로 시작하지만 사용자 선택에 따라 플레이 경험이 확장되는 구조.
- **학생들은 무엇을 체험하는가?** 불 지피기/유지, 상태 변화 관찰, 언어 변경 등.
- **실제 가장 흥미로웠던 부분:** [학생 직접 체험 후 평가].

### ③ 코드 수정 아이디어

- **수정 파일:** `script/room.js`
- **핵심 변수/함수:** `Room._STOKE_COOLDOWN`, `lightButton`, `stokeButton`, `Button.cooldown`.
- **예상 효과:** 쿨다운 10초 → 5초 단축. 실제 차이와 조건은 UI 실측으로 확인할 것.
- **추가 실습 아이디어:** 다른 안전한 기본 설정을 작은 폭으로 바꾸고 변경 전후를 비교 (코드 이해와 라이선스 준수 필요).

## 6. OSS Playground 추천서 ④~⑤

### ④ 다음 학기 50분 실습 구성안

| 시간 | 학생 활동 | 산출물 |
|---|---|---|
| 5분 | OSS 소개, 라이선스 확인 | 원본 Repo와 라이선스 |
| 10분 | 게임 직접 실행, 2가지 조작 | 테스트 로그·캡처 |
| 10분 | `room.js` 및 `Button.js` 탐색 | 코드 역할 설명 |
| 15분 | `_STOKE_COOLDOWN` 변경 및 재실행 | 코드 diff, 결과 비교 |
| 10분 | Git Commit, 차이 공유 | Fork URL/Commit SHA |

- **예상 어려움:** 브라우저 저장 상태가 달라 초기 진행 조건이 일치하지 않음; 버튼 사용 가능 조건에 따라 쿨다운 검증이 어려움; 로컬 파일 접근/서버 실행 문제; Git/GitHub에 익숙하지 않을 수 있음.
- **대응:** 새 게임과 동일 설정 통제, 단계별 스크린샷 템플릿, 사전 설치 없이 실행되는 데모 활용, GitHub 웹 편집 또는 표준 개발 환경의 둘 중 하나 선택.

### ⑤ 최종 추천 의견 (4문장, 초안)

A Dark Room은 브라우저에서 사용자의 입력과 게임 상태 변화가 연결되는 원리를 익히기에 적합한 프로젝트다. 학생들은 한 개의 설정값을 변경하고 버튼의 동작 차이를 관찰하면서 소스 코드가 사용자 경험에 영향을 미치는 과정을 이해할 수 있다. 또한 GitHub Fork와 Commit을 통해 오픈소스의 출처와 변경 이력을 관리하는 연습을 할 수 있다. 다만 저장된 게임 상태와 시간 설정을 통제한 실습 매뉴얼이 있어야 짧은 수업에서 재현성을 확보할 수 있다.

---

## 제출 최종 판정 (작성일 현재)

- [x] OSS 후보 3개 원본 저장소 및 라이선스 조사
- [x] 개인 Fork·코드 수정·Commit 링크 확인
- [x] 보고서 원고 및 추천서 ①~⑤ 초안 마련
- [ ] 실제 브라우저 플레이 테스트 2개 이상
- [ ] 실제 게임 실행 화면 캡처 2장 이상
- [ ] 수정 전후 브라우저 동작 실측
- [ ] 캡처 포함한 PDF 4~6페이지 내외 완성
- [ ] LMS 제출 완료

**실제 실행하지 않은 결과를 경험담으로 작성하거나 캡처를 임의 생성하지 않는다.**
