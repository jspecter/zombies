/** @format */

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Actor extends cc.Component {
    start() {}

    getSpineComp(): sp.Skeleton {
        return this.node.getComponent(sp.Skeleton);
    }

    setSpineAnim(trackIndex: number, name: string, loop: boolean): void {
        let spineComp = this.getSpineComp();
        spineComp.setAnimation(trackIndex, name, loop);
    }

    run(): void {
        this.setSpineAnim(0, 'run', true);
    }

    walk(): void {
        this.setSpineAnim(0, 'walk', true);
    }

    shoot(): void {
        this.setSpineAnim(0, 'shoot', true);
    }

    jump(): void {
        this.setSpineAnim(0, 'jump', true);
    }

    turn(): void {
        this.setSpineAnim(0, 'turn', true);
    }

    // update (dt) {}
}
