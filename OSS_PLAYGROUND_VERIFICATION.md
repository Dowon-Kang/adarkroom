# OSS Playground Hunter — 실제 실행·증빙 기록

> **상태: PENDING — 직접 실행 및 캡처 전**  
> 이 문서는 검사 절차 및 기록 양식이다. 아래 `예상 결과`는 실제로 수행된 테스트 결과가 아니다.

## 1. 원본·수정본 구분 (GitHub 확인 완료)

| 항목 | 링크·값 |
|---|---|
| 원본 OSS | https://github.com/doublespeakgames/adarkroom |
| 본인 Fork | https://github.com/Dowon-Kang/adarkroom |
| 원본 공개 데모 | https://doublespeakgames.github.io/adarkroom/ |
| 라이선스 | MPL-2.0 (저작권·라이선스 고지 유지) |
| 변경 파일 | `script/room.js` |
| 변경 전 | `_STOKE_COOLDOWN: 10` (초) |
| 변경 후 | `_STOKE_COOLDOWN: 5` (초) |
| 기존 변경 Commit | https://github.com/Dowon-Kang/adarkroom/commit/c97429777b8cdd3ab90a50091225380e29842cbc |
| 자동 소스 검사 | `node tools/oss-playground-check.mjs` (소스 검사일 뿐 직접 실행 아님) |

소스 확인: `Room._STOKE_COOLDOWN`은 `lightButton` 및 `stokeButton`의 `cooldown`에 전달되고, `script/Button.js`에서 초를 밀리초로 변환하여 동작한다. `Engine._debug`가 활성화되면 해당 값이 0으로 덮어써질 수 있고 `Engine.options.doubleTime`으로 효과 시간이 절반이 될 수 있으므로 테스트 시 사용하지 않는다.

## 2. 실행 방법 (로컬 브라우저)

1. `git clone https://github.com/Dowon-Kang/adarkroom.git`
2. `cd adarkroom`
3. `node tools/oss-playground-check.mjs` — 소스 수준 확인 (통과해도 실사용 검증은 별도)
4. `python -m http.server 8000` (Python 3이 설치된 경우)
5. 브라우저에서 `http://localhost:8000/?lang=en` 열기
6. Chrome/Edge 개발자 도구 Console에서 오류를 확인한다.
7. 원본 동작은 공식 데모에서 따로 확인한다. 같은 컴퓨터라도 두 URL의 저장 상태가 다르므로 신규 게임 여부를 확인한다.

실행 환경에 따라 로컬 서버/브라우저 접근이 막힐 수 있다. 그런 경우 **실행 성공으로 표기하지 말고** 오류 내용과 제약을 기록한다.

## 3. 체험 2가지 — 원문 필수

### TEST-A: 불 켜기 (핵심 인터랙션)

- **행동:** 새 게임에서 `light fire` 버튼을 누른다.
- **예상 결과:** 게임 상태/문구와 버튼 표시가 달라진다.
- **실제 관찰 결과:** [미기입 — 직접 테스트 후 작성]
- **스크린샷 파일:** `evidence/test-a-light-fire.png` [미생성]
- **브라우저/OS/실행 URL/시각:** [미기입]
- **판정:** PENDING

### TEST-B: 언어 전환 (서로 다른 설정)

- **행동:** 신규 탭에서 `?lang=en`과 `?lang=ko`를 비교하거나 언어 설정을 변경한다.
- **예상 결과:** 지원 언어에 따라 UI 텍스트가 달라진다.
- **실제 관찰 결과:** [미기입 — 직접 테스트 후 작성]
- **스크린샷 파일:** `evidence/test-b-language.png` [미생성]
- **브라우저/OS/실행 URL/시각:** [미기입]
- **판정:** PENDING

> 원문 조건: **서로 다른 설정/기능 2개 이상** 직접 테스트, **실제 실행 화면 캡처 2장 이상**. 위 파일명은 제안이며, 캡처가 존재하지 않는 동안 PDF에 넣거나 생성했다고 기재하면 안 된다.

## 4. 변경 전후 실사용 비교 — 원문 필수

- **원본 주소:** https://doublespeakgames.github.io/adarkroom/
- **수정본 주소:** 로컬 서버 `http://localhost:8000/` 또는 실제 배포 성공 이후 본인 Pages URL
- **행동:** 같은 게임 진행 조건에서 불 지피기/유지 버튼을 눌러 다음 사용 가능해지는 간격을 관찰한다.
- **코드상 예상:** 원본 10초, 수정본 5초 (`doubleTime`/Debug 비활성화 조건).
- **원본 실측 시간:** [미기입]
- **수정본 실측 시간:** [미기입]
- **원본 캡처:** [미생성]
- **수정본 캡처:** [미생성]
- **다른 영향 요소:** 저장된 이전 게임 상태, 브라우저 캐시, Debug 모드, 시간배속, 버튼의 자원 부족/비활성 상태
- **실제 판정:** PENDING

## 5. 제출 전 체크리스트

- [x] Fork 저장소와 원본 저장소 확인
- [x] 라이선스명과 원본 출처 확인
- [x] 실제 코드 변경 Commit 존재 확인
- [ ] 직접 게임 실행 성공
- [ ] 서로 다른 기능·설정 **2건** 실제 테스트
- [ ] 실제 실행 화면 **최소 2장** 확보하고 각 캡처 출처 기재
- [ ] 원본과 수정본 **실제 동작** 비교
- [ ] PDF에 **프로젝트 3개 소개**, 선정 이유, 체험 결과, 코드 비교, 최종 추천서 포함
- [ ] PDF 4~6페이지 내외, 최종 열람 검증
- [ ] LMS에 **PDF + 본인 Fork URL** 제출
- [ ] (선택) 본인 수정본 배포 URL을 실제 브라우저로 확인하고 제출

**중요:** README·코드 검사·GitHub Commit만 확인된 상태는 원문 3절의 본인 직접 체험을 충족하지 않는다. 예시·예상·코드상 추정과 관찰된 결과를 분리한다.
