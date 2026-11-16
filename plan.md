# OSS Playground Hunter — plan.md

## 작업 목표
원문 1~8절 요구에 따라 **후보 3개 조사 → A Dark Room 최종 선정 → 2개 이상 직접 체험 및 2장 이상 실행 캡처 → 본인 Fork 코드 변경·Commit·전후 비교 → 4~6페이지 PDF 보고서와 URL 제출**을 달성한다. agent.md의 진실성 및 페르소나 검증 기준을 따른다.

## 게이트와 현재 상태
| 단계 | 작업 | 실제 상태 | 검증/필수 증빙 |
|---|---|---|---|
| G0 | 원문·LMS 제출 규칙 | PARTIAL | Notion 원문 확인. LMS 기한·입력 형식 미확인 |
| G1 | 3개 OSS 조사·선정 | SOURCE_VERIFIED | A Dark Room / 2048 / Hextris, 라이선스와 소스·데모 안내 확인 |
| G2 | 직접 실행·2개 체험 | NOT_DONE | 직접 실행·테스트 A/B, 실행 화면 2장 이상 필요 |
| G3 | Fork 및 코드 수정 | CODE_COMMITTED | 본인 Fork, script/room.js 10→5, Commit SHA 확인 |
| G3b | 수정 전후 실제 비교 | NOT_DONE | 원본/변경본에서 동일 버튼 쿨다운 관찰 |
| G4 | 최종 추천서 | DRAFT | 프로젝트 정보·재미·수정 파일/변수·30~60분 실습안·최종 3~5문장 |
| G5 | 4~6p PDF 보고서 | DRAFT | 3개 소개·실행 증빙 2장·실험 표·코드 diff·추천서 |
| G6 | 정적 웹 배포 | OPTIONAL | 직접 배포 URL은 선택사항. 확인한 URL만 제출 |
| G7 | LMS 제출 | NOT_DONE | 제출 완료 기록 필수 |

## 이미 확인된 사실
- 본인 Fork: https://github.com/Dowon-Kang/adarkroom
- 원본: https://github.com/doublespeakgames/adarkroom
- 원본 데모: https://doublespeakgames.github.io/adarkroom/ (README 안내)
- 라이선스: MPL-2.0
- 수정 코드: script/room.js, _STOKE_COOLDOWN 10 → 5, 버튼 2개의 cooldown으로 전달.
- Commit: c97429777b8cdd3ab90a50091225380e29842cbc
- 실제 브라우저 실행 캡처는 아직 없음. 정적 소스 비교로 사용자 플레이를 대체하지 않는다.

## 테스트 프로토콜 — 사용자가 직접 수행
1. 원본 데모와 본인 Fork 수정본을 각각 브라우저로 실행한다. 실행 URL이 아직 없다면 Fork를 로컬 Clone하고 정적 서버(`python -m http.server 8000`)로 테스트.
2. 테스트 A: 새 게임에서 'light fire' 클릭 전/후 화면을 캡처하고, 클릭으로 변화하는 텍스트/버튼 상태를 기록.
3. 테스트 B: 불 지피기/유지 버튼의 쿨다운을 관찰해 원본 약 10초, 수정본 약 5초인지 스톱워치와 화면 캡처로 대조. 게임 상태·boost/doubleTime·debug 모드 같은 시간 영향 요인은 통제.
4. 서로 구분되는 기능 또는 설정 2가지 이상 체험 조건도 확인: 예시로 불 지피기 버튼 / 불 유지 버튼을 별도 조작·기록. 사용자 실제 관찰 후에만 판정.
5. 각 캡처의 파일명, URL, 실행 시각, 사용자 입력, 실제 결과를 증빙표에 기록.

## 변경 실패/예외
- 사용자 게임에서 cooldown 단축 효과가 보이지 않으면 성공으로 쓰지 않는다. 새 게임 저장 상태, 디버그/부스트/시간배속, 로컬 캐시를 점검하고 실제 원인을 보고한다.
- 만약 정적 호스팅에서 에셋 로딩 오류가 나면 개발자 도구 Console/Network를 확인하여 기록.
- 직접 화면 캡처가 없으면 PDF는 DRAFT_NOT_SUBMISSION 상태 유지.
- 보고서 생성/수정 후 PDF 페이지 수, 한글 폰트, 이미지 실제 출처와 읽기 품질을 검증한다.

## PDF 6페이지 제안
1. 후보 3개 소개 및 라이선스.
2. 최종 선정 이유와 기능/수업 사용성.
3. 실제 체험 2건 및 **실행 캡처 2장 이상**.
4. 핵심 코드와 변경 전후 비교 + GitHub Commit.
5. 추천서 ①기본정보, ②흥미, ③코드 수정.
6. 추천서 ④30~60분 수업 활용, ⑤3~5문장 최종 추천.

## 제출 직전 판정
- [ ] 학생 실제 브라우저 실행
- [ ] 서로 다른 설정/기능 최소 2건
- [ ] 실제 실행 화면 캡처 2장 이상
- [x] 본인 Fork와 코드 수정 Commit
- [ ] 결과 전후 비교 화면 증거
- [ ] 추천서 세부 항목 누락 0건
- [ ] 보고서 PDF 4~6페이지 내외
- [ ] LMS 최종 제출 완료

## 2026-11-16 GitHub 연결 재검증 기록
- 실제 개인 Fork와 상위 저장소 관계 확인: `Dowon-Kang/adarkroom` ← `doublespeakgames/adarkroom`.
- 원본 `script/room.js`의 `_STOKE_COOLDOWN` = 10, 개인 Fork에서는 = 5임을 GitHub 원본 코드로 대조.
- `lightButton`, `stokeButton`이 해당 값을 사용하고, `Button.js`가 초를 밀리초로 바꾸는 소스 경로 재확인.
- 예외 조건: Debug 활성 시 쿨다운이 0으로 변경되며 `doubleTime` 활성 시 체감 시간이 절반이므로 비교 시 통제 필요.
- 직접 테스트와 증빙 작성에 사용할 `OSS_PLAYGROUND_VERIFICATION.md`를 GitHub에 새로 커밋: https://github.com/Dowon-Kang/adarkroom/commit/342b709d421ee6ffc64cd51b63868fc838c581ef
- **정적 소스 검증만 확인됨**. 플레이 실측·화면 캡처 2장·수정본 배포·LMS 제출은 여전히 미완료.
