import fly from '@/utils/request';

//添加面试：
export let addInterview = code=>{
    return fly.post('/sign', {code});
}

//面试列表：
export let interviewList = code=>{
    return fly.get('/sign', code);
}

//更新面试信息：
export let updateInterview = code=>{
    return fly.put('/sign/1', {code});
}

//获取面试详情：
export let interviewDetail = code=>{
    return fly.get('/sign/7');
}