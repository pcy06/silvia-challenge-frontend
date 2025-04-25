# Silvia Challenge Dashboard Frontend
이 프론트엔드 대시보드 애플리케이션은 백엔드와 GraphQL로 연동하여 실비아 앱의 '챙김 -> 두뇌훈련' 탭의 컨텐츠를 조회하는 기능을 제공합니다.

## 프로젝트 실행 전 준비
프로젝트 실행 전, Silvia Challenge Dashboard Backend가 실행 중이어야 합니다.

.env.example을 참고하여 `.env` 파일에 백엔드 API 주소를 기입한 후 실행하여야 합니다.

## 프로젝트 실행 방법
```bash
# Git Clone
git clone https://github.com/pcy06/silvia-challenge-frontend.git

# 패키지 설치
cd silvia-challenge-frontend && yarn install

# Expo 개발 웹 서버 실행
yarn expo start --web
```