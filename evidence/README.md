# OSS Playground Hunter — 자동 브라우저 실행 증빙 (2026-11-16)

이 폴더의 3개 JPEG는 **외부 브라우저 자동화 도구로 실제 웹페이지를 렌더링해 캡처한 화면**이다. 합성/재구성 그림이 아니다.

## 이미지 출처
- `original_after_click.jpg`: https://doublespeakgames.github.io/adarkroom/?lang=en 에서 브라우저 저장 상태를 초기화하고 `light fire`를 누른 직후 촬영. **원본 공식 데모**.
- `patched_after_click.jpg`: 공식 웹페이지에서 `script/room.js`의 HTTP 응답에 대해 `_STOKE_COOLDOWN: 10,`을 `_STOKE_COOLDOWN: 5,`로 **메모리에서 정확히 한 번 치환**하고 페이지를 새로고침하여 `light fire`를 누른 직후 촬영. **본인 Fork의 동일 한 줄을 적용한 자동화 시뮬레이션**. 개인 GitHub Pages나 실제 배포된 Fork는 아니다.
- `korean_initial.jpg`: 공식 데모 `?lang=ko`의 한국어 초기 화면.
- 각 파일은 웹 브라우저에서 실제로 렌더링된 픽셀을 JPEG로 캡처했다.
- 본 과제에서 요구한 **학생 본인의 직접 플레이**를 대체한다고 주장하지 않는다.

## 브라우저 실제 자동화 결과

| 항목 | 입력/대상 | 관찰 |
|---|---|---|
| 버튼 상호작용 | 원본 / 영어 새 게임 → light fire | 'A Firelit Room'·'stoke fire' 표시, 버튼의 disabled/cooldown 상태 |
| 기본 쿨다운 | 원본 코드의 `_STOKE_COOLDOWN=10` | 버튼 재활성화 약 **10.04초** (Python monotonic 기반 자동화 단회 관측) |
| 수정 쿨다운 | HTTP 응답 인터셉트로 `10→5` 적용 | 재활성화 약 **5.05초** (단회 관측, 실제 Fork 사이트 배포 검증 아님) |
| 언어 전환 | `?lang=ko` | '어두운 방', '불 피우기', '방은 너무 춥다.' 표시 |

**측정의 한계**: 1회 관측 값이며 브라우저 처리 지연을 포함한다. 다회 반복 측정이나 신뢰구간은 산출하지 않았다. 캐시, 저장 상태, Debug/시간배속 등 실행 조건에 따라 값이 달라질 수 있다.

## 제출까지 남은 항목
1. 학생 본인이 게임을 직접 실행하고 기능·설정 2가지 이상 체험했다는 실제 증빙과 기록.
2. 학생 본인이 촬영한 실행 화면 캡처 2장 이상 또는 과제 담당자가 자동화 캡처의 인정 가능 여부를 확인.
3. 본인 수정본의 배포(선택; https://dowon-kang.github.io/adarkroom/ 는 확인 당시 404).
4. 4~6페이지 PDF로 편집해 LMS에 PDF+본인 Fork URL 제출.
