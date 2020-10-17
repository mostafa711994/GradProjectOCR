<?php

namespace App\Http\Controllers;

use App\Plan;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PlanController extends Controller
{

    public function index()
    {
        $plan = Plan::all();

        return $plan;

    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:plans|max:50',
            'price' => 'required|numeric',
            'trials' => 'required|numeric'

        ]);

      $plan = Plan::create([

            'name'=>$request->name,
            'price'=>$request->price,
          'trials' => $request->trials
        ]);


        return response()->json([$plan]);
    }




    public function show(Plan $plan)
    {
        //
    }


    public function edit(Plan $plan)
    {
        return $plan;
    }


    public function update(Request $request, Plan $plan)
    {
        $request->validate([
            'name' => 'required|string|max:50|unique:plans,name,'. $plan->id,
            'price' => 'required|numeric',
            'trials' => 'required|numeric'

        ]);

        $data = $request->all();

        $updatePlan = $plan->update($data);

        return response()->json([$updatePlan]);
    }


    public function destroy(Plan $plan)
    {

        $plan->delete();
        return $plan;

    }
}
