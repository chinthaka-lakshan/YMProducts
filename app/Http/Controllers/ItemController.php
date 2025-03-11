<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
class ItemController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request-> validate([
            'name' => 'required|string',
            'quantity' => 'required|integer',
            'price'=> 'required|numeric',
            'weight' => 'required|string',
            'image'=> 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('itemsImage','images');
            $validatedData['image'] = $imagePath;
        }
        Item::create($validatedData);
        return response()->json(['message' =>'Item added successfully']);
    }

    public function getItems(){
        return response()->json(Item::all());
    }
}
