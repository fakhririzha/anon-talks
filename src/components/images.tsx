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
function AnonTalkDarkLogo() {
    return (
        <Image
            src={'/imgs/logo_anontalk_black.png'}
            alt={'logo anontalk dark'}
            width="64"
            height="64"
        />
    );
}
function AnonTalkLightLogo() {
    return (
        <Image
            src={'/imgs/logo_anontalk_white.png'}
            alt={'logo anontalk light'}
            width="64"
            height="64"
        />
    );
}
export { AnonTalkLogo, AnonTalkAI, AnonTalkDarkLogo, AnonTalkLightLogo };
