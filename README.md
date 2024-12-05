# Commit Message Convention

프로젝트에서 사용되는 커밋 메시지의 유형과 그 설명은 다음과 같습니다:

| Type             | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Feat**         | 새로운 기능을 추가                                                         |
| **Fix**          | 버그 수정                                                                  |
| **Design**       | CSS 등 사용자 UI 디자인 변경                                               |
| **!BREAKING CHANGE** | 커다란 API 변경                                                         |
| **!HOTFIX**      | 급하게 치명적인 버그를 고쳐야 하는 경우                                    |
| **Style**        | 코드 포맷 변경, 세미콜론 누락 등 코드 수정이 없는 경우                     |
| **Refactor**     | 프로덕션 코드 리팩토링                                                    |
| **Comment**      | 필요한 주석 추가 및 변경                                                  |
| **Docs**         | 문서 수정                                                                  |
| **Test**         | 테스트 코드 추가 또는 리팩토링 (Production Code 변경 없음)                |
| **Chore**        | 빌드 업무 수정, 패키지 매니저 구성 등 (Production Code 변경 없음)         |
| **Rename**       | 파일 혹은 폴더명을 수정하거나 이동하는 작업                                |
| **Remove**       | 파일을 삭제하는 작업                                                      |

## Commit Example

```bash
git commit -m "Feat :: Add user authentication feature"
git commit -m "Fix :: Correct typo in login function"
git commit -m "Docs :: Update README with new API usage"
