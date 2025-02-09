<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function listPage()
    {
        return Inertia::render('ListPage');
    }

    public function detailPage()
    {
        return Inertia::render('DetailPage');
    }
}
