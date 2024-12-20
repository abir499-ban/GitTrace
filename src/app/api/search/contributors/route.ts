import { NextRequest, NextResponse } from "next/server";
import { GITHUB_API } from "../../../../../constants/constant";
import axios from 'axios'
import 'dotenv/config'

export async function GET(req : NextRequest){
    try {
        console.log("Hello")
        const {searchParams} = new URL(req.url)
        const repo = searchParams.get('repo')
        const owner = searchParams.get('owner');
        const token = process.env.GITHUB_ACCESS_TOKEN;
        const request_uri= `${GITHUB_API}/repos/${owner}/${repo}/contributors`;
        const response = await axios.get(request_uri,{
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        })
        return NextResponse.json({message : response.data, success : true}, {status : 201})
    } catch (error) {
        return NextResponse.json({message : error, success : false}, {status : 500})
    }
}