# mQR System - Restaurant QR Menu Management

## Prerequisites
- Node.js >= 18
- PostgreSQL >= 14
- Redis (optional, for production)

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd mQR-system
```

2. Install dependencies
```bash
npm run install:all
```

3. Setup database
```bash
./scripts/setup-db.sh
```

4. Configure environment variables
```bash
cp packages/backend/.env.example packages/backend/.env
cp packages/frontend/.env.example packages/frontend/.env
# Edit .env files with your configuration
```

5. Run development servers
```bash
npm run dev
```

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## Project Structure
```
mQR-system/
├── packages/
│   ├── backend/     # Node.js + Express API
│   ├── frontend/    # React + TypeScript
│   └── shared/      # Shared types
└── infrastructure/  # Docker, K8s configs
```

## Commands
- `npm run dev` - Start both servers
- `npm run build` - Build both projects
- `npm run clean` - Clean all node_modules

## License
MIT
