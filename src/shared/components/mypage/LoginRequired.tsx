'use client';

import { PopupSet } from '@/shared/components';
import { useRouter } from 'next/router';

interface LoginRequiredProps {
  onClose: () => void;
}

export default function LoginRequired({ onClose }: LoginRequiredProps) {
  const router = useRouter();

  const handleClose = () => {
    onClose();
    router.push('/auth');
  };

  return (
    <PopupSet text='로그인이 필요한 서비스입니다.' onClose={handleClose} />
  );
}
