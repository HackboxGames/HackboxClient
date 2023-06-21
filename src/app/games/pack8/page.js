'use client'

import { useRouter } from 'next/navigation';
import { Button, Center } from '@mantine/core';

export default function PackEight() {
    const router = useRouter();
    return (
        <Center>
            <Button color="accent" onClick={() => router.push('/')}>pack eight</Button>
        </Center>
    )
}