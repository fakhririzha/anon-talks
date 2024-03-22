import React from 'react';
import Image from 'next/image';

function Images() {
    return <div>default function image</div>;
}
function AnonTalkLogo() {
    return (
        <Image
            src={'/imgs/logo_anontalk.png'}
            alt={'logo anontalk'}
            width="90"
            height="90"
        />
    );
}
function AnonTalkAI() {
    return (
        <Image
            src={'/imgs/hidetalkAI.png'}
            alt={'logo hidetalkAI'}
            width="517"
            height="526"
        />
    );
}
export { AnonTalkLogo, AnonTalkAI };
