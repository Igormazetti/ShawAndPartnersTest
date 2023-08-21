'use client';
import React from 'react';
import { useParams } from 'next/navigation';

export default function Details() {
  const { username } = useParams();
  return <div>Details page</div>;
}
