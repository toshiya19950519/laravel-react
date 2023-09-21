<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }

    public function create(Request $request)
    {
        $post = new Post;
        $post->name = $request->name;
        $post->content = $request->content;
        $post->save();
        return response()->json($post, 200);
    }
}
